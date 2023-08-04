/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.2';
import { Candidate } from '../../common/model';

const c1 = new Candidate('Berhane', new Date(2010, 1, 1), [], 'F');
const c2 = new Candidate('Birhanie', new Date(2010, 1, 4), [], 'M');
const c3 = new Candidate('Brhanne', new Date(2010, 1, 7), [], 'F');
const c4 = new Candidate('Abraham', new Date(2010, 1, 1), [], 'F');
const c5 = new Candidate('Abreham', new Date(2010, 1, 1), [], 'M');
const c6 = new Candidate('Abraham', new Date(2010, 2, 1), [], 'M');
const c7 = new Candidate('Brhanne', new Date(2010, 3, 1), [], 'F');

describe('Duplicate Counts', () => {
  test('Dupllicate count 1', () => {
    expect(Utils.duplicateCount([c1, c2, c3, c4, c5, c7])).toBe(3);
  });

  test('Dupllicate count 2', () => {
    expect(Utils.duplicateCount([c5, c4, c3, c1])).toBe(2);
  });

  test('Dupllicate count 3', () => {
    expect(Utils.duplicateCount([c1, c3, c4, c6])).toBe(1);
  });

  test('Dupllicate count 4', () => {
    expect(Utils.duplicateCount([c4, c2, c6, c7])).toBe(0);
  });

  test('Dupllicate count 5', () => {
    expect(Utils.duplicateCount([c5])).toBe(0);
  });

  test('Dupllicate count 6', () => {
    expect(Utils.duplicateCount([])).toBe(0);
  });
});
