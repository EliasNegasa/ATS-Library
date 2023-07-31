/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.3';
import { Job, Candidate, Skill } from '../../common/model';

const j1 = new Job('J1', '', [new Skill('s1', 0), new Skill('s2', 2), new Skill('s3', 2)], 'M');
const j2 = new Job('J2', '', [new Skill('s1', 0), new Skill('s2', 2), new Skill('s3', 2)], 'F');
const j3 = new Job('J3', '', [new Skill('s1', 0), new Skill('s2', 2), new Skill('s3', 2)]);
const j4 = new Job('J4', '', [new Skill('s1', 2), new Skill('s2', 2), new Skill('s3', 3), new Skill('s4', 2), new Skill('s5', 3)]);
const j5 = new Job('J5', '', [new Skill('s1', 0), new Skill('s2', 2), new Skill('s3', 2)], 'F');

const c1 = new Candidate('C', null, [new Skill('s3', 0), new Skill('s2', 2), new Skill('s1', 2)], 'M');
const c2 = new Candidate('C', null, [new Skill('s3', 2), new Skill('s2', 2), new Skill('s1', 2)], 'M');
const c3 = new Candidate('C', null, [new Skill('s4', 2), new Skill('s2', 2)], 'M');
const c4 = new Candidate('C', null, [new Skill('s1', 2), new Skill('S2', 2), new Skill ('s3', 2), new Skill('s4', 2), new Skill('S5', 3)], 'F');

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c1, j1))
    .toBe(
      73
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c1, j2))
    .toBe(
      53
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c1, j3))
    .toBe(
      73
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c1, j4))
    .toBe(
      52
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c1, j5))
    .toBe(
      53
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c2, j1))
    .toBe(
      100
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c2, j2))
    .toBe(
      80
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c2, j3))
    .toBe(
      100
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c2, j4))
    .toBe(
      52
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c2, j5))
    .toBe(
      80
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c3, j1))
    .toBe(
      20
    );
});
test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c3, j2))
    .toBe(
      0
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c3, j3))
    .toBe(
      20
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c3, j4))
    .toBe(
      32
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c3, j5))
    .toBe(
      46
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c4, j1))
    .toBe(
      80
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c4, j2))
    .toBe(
      100
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c4, j3))
    .toBe(
      100
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c4, j4))
    .toBe(
      84
    );
});

test('Suitability test', () => {
  expect(
    Utils.suitabilityScore(c4, j5))
    .toBe(
      100
    );
});
