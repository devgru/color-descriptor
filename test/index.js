import { assert } from 'chai';
import { ColorDescriptor } from '../src';

const { describe } = new ColorDescriptor('ru');

describe('Description test.', () => {
  it('should test description', () => {
    console.log(describe('#ff0000').join(', '));
    assert(describe('#ff0000').join(', ') === 'тёплый', 'Should be warm');
  });
});
