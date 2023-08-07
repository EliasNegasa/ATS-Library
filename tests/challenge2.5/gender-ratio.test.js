/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1';
import { Candidate } from '../../common/model';

const c1 = new Candidate('C1', new Date(2010, 1, 1), [], 'F');
const c2 = new Candidate('C2', new Date(2010, 1, 1), [], 'M');
const c3 = new Candidate('C3', new Date(2010, 1, 1), [], 'F');
const c4 = new Candidate('C4', new Date(2010, 1, 1), [], 'F');
const c5 = new Candidate('C5', new Date(2010, 1, 1), [], 'M');

describe('Gender Ratios', () => {
  test('Gender Ratio 1', () => {
    expect(Utils.genderRatio([c1, c2, c3, c4, c5])).toBe(1.5);
  });

  test('Gender Ratio 2', () => {
    expect(Utils.genderRatio([c1, c2, c3, c5])).toBe(1);
  });

  test('Gender Ratio 3', () => {
    expect(Utils.genderRatio([c1, c3, c4])).toBe(3);
  });

  test('Gender Ratio 4', () => {
    expect(Utils.genderRatio([c2, c5])).toBe(0);
  });

  test('Gender Ratio 5', () => {
    expect(Utils.genderRatio([])).toBe(0);
  });

  test('Gender Ratio 6', () => {
    expect(Utils.genderRatio([c1, c2, c5])).toBe(0.5);
  });
});
