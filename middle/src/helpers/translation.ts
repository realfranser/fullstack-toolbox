import jsonStableStringify from 'json-stable-stringify';
import * as _ from 'lodash';

import {
  SmartlingTranslationKey,
  SmartlingTranslationValue,
} from '../constants/translation';
import Model from '../models/base_model';

export const translationKeyComparator: jsonStableStringify.Comparator = (
  left,
  right
) => {
  if (left.key === SmartlingTranslationKey.TRANSLATION_KEY) {
    return -1;
  }
  if (right.key === SmartlingTranslationKey.TRANSLATION_KEY) {
    return 1;
  }

  return left.key.localeCompare(right.key);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function translateData(rawData: any): any {
  // not sure how to translate arrays that aren't enveloped in an object
  if (_.isArray(rawData)) {
    return rawData;
  }
  if (!_.isObject(rawData)) {
    return rawData;
  }

  const data = rawData instanceof Model ? rawData.toJSON() : rawData;

  /*
   * translate and manually stringify to JSON in order to preserve ordering of
   * Smartling's `no_translate` key.
   */
  return jsonStableStringify(
    {
      ...data,
      [SmartlingTranslationKey.TRANSLATION_KEY]:
        SmartlingTranslationValue.SL_NONE,
    },
    { cmp: translationKeyComparator }
  );
}
