/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.3';
import { Skill } from '../../common/model';

const s1 = new Skill('Skill', 0);
const s2 = new Skill('skill', 2);
const s3 = new Skill('Skill2', 2);
const s4 = new Skill('skill2', 1);

test('Skills match test', () => {
  expect(Utils.skillsMatch(s1, s2)).toBe(false);
});

test('Skills match test', () => {
  expect(Utils.skillsMatch(s2, s1)).toBe(true);
});

test('Skills match test', () => {
  expect(Utils.skillsMatch(s2, s3)).toBe(false);
});

test('Skills match test', () => {
  expect(Utils.skillsMatch(s3, s2)).toBe(false);
});

test('Skills match test', () => {
  expect(Utils.skillsMatch(s3, s4)).toBe(true);
});

test('Skills match test', () => {
  expect(Utils.skillsMatch(s4, s3)).toBe(false);
});
