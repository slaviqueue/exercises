/* global it describe */

const hash = require('../problems/hash');
const {expect} = require('chai');

describe('#hash(object, hashString)', function() {
  const obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {
          funFact: 'I like fishing.',
        },
      },
    },
  };

  it('should return name', () => {
    expect(hash(obj, 'person.name')).to.equal('joe');
  });

  it('should return funFact', () => {
    expect(hash(obj, 'person.history.bio.funFact')).to.equal('I like fishing.');
  });

  it('should be undefined', () => {
    expect(hash(obj, '')).to.equal(undefined);
    expect(hash(obj, 'this is unknown property')).to.equal(undefined);
    expect(hash(obj, 'this.is.unknown.property.too')).to.equal(undefined);
  });
});
