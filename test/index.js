import { assert } from 'chai';
import { getDescription } from '../src';

describe('Description test.', () => {
  it('should test description', () => {
    console.log(getDescription('#ff0000').join(', '));
    assert(getDescription('#ff0000').join(', ') === 'тёплый', 'wat?');
  });
});
