/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.2';
import { Candidate } from '../../common/model';

const c1 = new Candidate('Berhane', new Date(2010, 1, 1), [], 'F');
const c2 = new Candidate('Birhanie', new Date(2010, 1, 1), [], 'M');
const c3 = new Candidate('Brhanne', new Date(2010, 1, 1), [], 'F');
const c4 = new Candidate('Abraham', new Date(2010, 1, 1), [], 'F');
const c5 = new Candidate('Abreham', new Date(2010, 1, 1), [], 'M');

describe('Possible Duplicates', () => {
  test('Duplicate 1', () => {
    expect(Utils.possibleDuplicates(c1, [c2, c3, c4, c5])).toEqual([c2, c3]);
  });

  test('Duplicate 2', () => {
    expect(Utils.possibleDuplicates(c2, [c4, c5])).toEqual([]);
  });

  test('Duplicate 3', () => {
    expect(Utils.possibleDuplicates(c2, [c3, c5])).toEqual([c3]);
  });

  test('Duplicate 4', () => {
    expect(Utils.possibleDuplicates(c4, [c1, c3, c5])).toEqual([c5]);
  });

  test('Duplicate 5', () => {
    expect(Utils.possibleDuplicates(c4, [])).toEqual([]);
  });
});
