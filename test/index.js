import { assert } from 'chai';
import { ColorDescriptor } from '../src';

const {
  getDescription
} = new ColorDescriptor('ru');

describe('Description test.', () => {
  it('should test description', () => {
    console.log(getDescription('#ff0000').join(', '));
    assert(getDescription('#ff0000').join(', ') === 'тёплый', 'Should be warm');
  });
});
