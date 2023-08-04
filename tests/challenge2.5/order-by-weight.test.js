/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1';
import { Candidate, Skill } from '../../common/model';

const c1 = new Candidate(
  'C1',
  null,
  [new Skill('s3', 0), new Skill('s2', 2), new Skill('s1', 2)],
  'M'
);
// 4
const c2 = new Candidate(
  'C2',
  null,
  [new Skill('s3', 2), new Skill('s2', 2), new Skill('s1', 2)],
  'M'
);
// 6
const c3 = new Candidate(
  'C3',
  null,
  [new Skill('s4', 2), new Skill('s2', 2)],
  'M'
);
// 4
const c4 = new Candidate(
  'C4',
  null,
  [
    new Skill('s1', 2),
    new Skill('s2', 2),
    new Skill('s3', 2),
    new Skill('s4', 2),
    new Skill('s5', 3),
  ],
  'F'
);
// 11

describe('Order by Weight', () => {
  test('Order by weight 1', () => {
    expect(Utils.orderByWeightedSkills([c1, c2, c3, c4])).toEqual([
      c4,
      c2,
      c1,
      c3,
    ]);
  });

  test('Order by weight 2', () => {
    expect(Utils.orderByWeightedSkills([c1, c2, c3])).toEqual([c2, c1, c3]);
  });

  test('Order by weight 3', () => {
    expect(Utils.orderByWeightedSkills([c3, c1, c4])).toEqual([c4, c3, c1]);
  });

  test('Order by weight 4', () => {
    expect(Utils.orderByWeightedSkills([])).toEqual([]);
  });
});
