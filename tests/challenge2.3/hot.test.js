/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.3';
import { Job, Candidate, Skill } from '../../common/model';

const j1 = new Job(
  'J1',
  '',
  [new Skill('s1', 0), new Skill('s2', 2), new Skill('s3', 2)],
  'M'
);
const j2 = new Job(
  'J2',
  '',
  [new Skill('s1', 0), new Skill('s2', 2), new Skill('s3', 2)],
  'F'
);
const j3 = new Job('J3', '', [
  new Skill('s1', 0),
  new Skill('s2', 2),
  new Skill('s3', 2),
]);
const j4 = new Job('J4', '', [
  new Skill('s1', 2),
  new Skill('s2', 2),
  new Skill('s3', 3),
  new Skill('s4', 2),
  new Skill('s5', 3),
]);

const c1 = new Candidate(
  'C',
  null,
  [new Skill('s3', 0), new Skill('s2', 2), new Skill('s1', 2)],
  'M'
);
const c2 = new Candidate(
  'C',
  null,
  [new Skill('s3', 2), new Skill('s2', 2), new Skill('s1', 2)],
  'M'
);
const c3 = new Candidate(
  'C',
  null,
  [new Skill('s4', 2), new Skill('s3', 1)],
  'M'
);
const c4 = new Candidate(
  'C',
  null,
  [
    new Skill('s1', 2),
    new Skill('S2', 2),
    new Skill('s3', 2),
    new Skill('s4', 2),
    new Skill('S5', 3),
  ],
  'F'
);

describe('Hotness Tests', () => {
  test('Hotness test', () => {
    expect(Utils.hottestCandidate([c1], [j1, j2, j3])).toBe(0);
  });

  test('Hotness test', () => {
    expect(Utils.hottestCandidate([c1, c2], [j1, j2, j3])).toBe(2);
  });

  test('Hotness test', () => {
    expect(Utils.hottestCandidate([c1, c2, c3], [j1, j2, j3])).toBe(2);
  });

  test('Hotness test', () => {
    expect(Utils.hottestCandidate([c1, c3], [j1, j2, j3])).toBe(0);
  });

  test('Hotness test', () => {
    expect(Utils.hottestCandidate([c2, c4], [j3, j4])).toBe(2);
  });
});
