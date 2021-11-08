import * as _ from 'lodash';

export const camelizeKeys = (
  data: _.Dictionary<string>
): _.Dictionary<string> => _.mapKeys(data, (value, key) => _.camelCase(key));
