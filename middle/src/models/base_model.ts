/* eslint-disable @typescript-eslint/member-ordering */
import {
  Dictionary,
  camelCase,
  defaults,
  filter,
  forOwn,
  has,
  isPlainObject,
  isUndefined,
  map,
  snakeCase,
  upperFirst,
} from 'lodash';

import {
  SmartlingTranslationKey,
  SmartlingTranslationValue,
} from '../constants/translation';

import { camelizeKeys } from '../helpers/object_utils';

interface IJsonConfig {
  shouldTranslate?: boolean;
}

const defaultJsonConfig: IJsonConfig = {
  // TODO: shouldTranslate should be enabled by default
  shouldTranslate: true,
};

export default class Model {
  [key: string]: any;

  protected fields: string[] = [];

  public populate(data: object): void {
    const camelCaseData = camelizeKeys(data as Dictionary<string>);

    const keys = Object.keys(camelCaseData);
    keys.forEach((key) => {
      if (this.fields.indexOf(key) > -1) {
        this[key] = camelCaseData[key];
      }
    });
  }

  public toJSON(rawConfig: IJsonConfig = {}): object {
    const config = defaults(rawConfig, defaultJsonConfig);
    const result: { [key: string]: any } = {};
    this.fields.forEach((key) => {
      if (key in this) {
        result[key] = this[key];
      }
    });

    /*
     * https://issues.corp.twilio.com/browse/PNREG-759
     * https://wiki.hq.twilio.com/pages/viewpage.action?pageId=92761953#Console&Smartling-TranslationsinanJSONendpoint
     * https://help.smartling.com/hc/en-us/articles/360000322694
     */
    if (!config.shouldTranslate) {
      result[SmartlingTranslationKey.TRANSLATION_KEY] =
        SmartlingTranslationValue.SL_NONE;
    }

    return result;
  }

  protected processRedactedFields(
    fields: string[],
    processField: (model: Model, field: string) => void
  ): void {
    // middle should use field name 'items' to name all object lists
    if (has(this, 'items')) {
      this.items.forEach((item: any) => {
        if (item instanceof Model) {
          item.processRedactedFields(fields, processField);
        }
      });

      // I don't think this return is correct but this should be fixed in toolbox's new version of BaseModel.
      return;
    }

    fields.forEach((key) => {
      if (has(this, key)) {
        processField(this, key);
      }
    });
  }

  private objectToSnakeCase(value: any): any {
    /*
     * when downstream wants request params as snakecase,
     * ignore properties assigned as an undefined default value
     */
    if (value !== null && isPlainObject(value)) {
      const result: { [key: string]: any } = {};
      forOwn(value, (v: any, key: string) => {
        if (v !== undefined) {
          result[snakeCase(key)] = this.objectToSnakeCase(v);
        }
      });
      return result;
    }
    if (Array.isArray(value)) {
      const filtered = filter(value, (v: any) => !isUndefined(v));
      return map(filtered, (v: any) => this.objectToSnakeCase(v));
    }
    // handle all other primitives
    return value;
  }

  public toSnakeCase(): object {
    const filteredObject: { [key: string]: any } = {};
    this.fields.forEach((key) => {
      if (key in this) {
        filteredObject[key] = this[key];
      }
    });
    return this.objectToSnakeCase(filteredObject);
  }

  public toTitleCase(): object {
    const result: { [key: string]: any } = {};

    // value
    this.fields.forEach((key) => {
      if (key in this && !isUndefined(this[key])) {
        result[upperFirst(camelCase(key))] = this[key];
      }
    });
    return result;
  }
}
