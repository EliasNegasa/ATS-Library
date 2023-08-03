/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1';
import { Job, Skill } from '../../common/model';

const j1 = new Job(
  'J1',
  '',
  [new Skill('s1', 0), new Skill('s2', 2), new Skill('s3', 2)],
  'M'
);
const j2 = new Job(
  'J2',
  '',
  [new Skill('s1', 0), new Skill('s4', 2), new Skill('s5', 2)],
  'F'
);
const j3 = new Job('J3', '', [
  new Skill('s1', 0),
  new Skill('s2', 2),
  new Skill('s3', 2),
]);
const j4 = new Job('J4', '', [
  new Skill('s1', 2),
  new Skill('s3', 3),
  new Skill('s4', 2),
  new Skill('s5', 3),
]);
const j5 = new Job(
  'J5',
  '',
  [new Skill('s2', 2), new Skill('s3', 2), new Skill('s4', 0)],
  'F'
);
const j6 = new Job(
  'J6',
  '',
  [new Skill('s2', 2), new Skill('s3', 2), new Skill('s5', 0)],
  'F'
);

describe('Most indemand skills', () => {
  test('Most indemand skill 1', () => {
    expect(Utils.mostInDemandSkill([j1, j2])).toBe('s1');
  });

  test('Most indemand skill 2', () => {
    expect(Utils.mostInDemandSkill([j2, j3, j4, j5])).toBe('s22');
  });

  test('Most indemand skill 3', () => {
    expect(Utils.mostInDemandSkill([j2, j4, j5])).toBe('s4');
  });

  test('Most indemand skill 4', () => {
    expect(Utils.mostInDemandSkill([j2, j4, j6])).toBe('s5');
  });
});
