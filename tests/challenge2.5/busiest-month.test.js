/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1';
import { Job } from '../../common/model';

const j1 = new Job('job1', '', [], undefined, new Date(2023, 1, 1));
const j2 = new Job('job2', '', [], undefined, new Date(2023, 2, 1));
const j3 = new Job('job3', '', [], undefined, new Date(2023, 3, 1));
const j4 = new Job('job4', '', [], undefined, new Date(2023, 3, 1));
const j5 = new Job('job5', '', [], undefined, new Date(2023, 3, 1));
const j6 = new Job('job6', '', [], undefined, new Date(2023, 4, 1));
const j7 = new Job('job7', '', [], undefined, new Date(2023, 4, 1));
const j8 = new Job('job8', '', [], undefined, new Date(2023, 1, 1));
const j9 = new Job('job9', '', [], undefined, new Date(2023, 5, 1));
const j10 = new Job('job10', '', [], undefined, new Date(2023, 0, 1));

describe('Busiest Months', () => {
  test('Busiest Month 1', () => {
    expect(Utils.busiestMonth([j1, j2, j3, j4, j5, j6, j7, j8, j9, j10])).toBe(
      3
    );
  });

  test('Busiest Month 2', () => {
    expect(Utils.busiestMonth([j1, j2, j8, j9])).toBe(1);
  });

  test('Busiest Month 3', () => {
    expect(Utils.busiestMonth([j6, j7, j8, j9])).toBe(4);
  });

  test('Busiest Month 6', () => {
    expect(Utils.busiestMonth([j3, j4, j5])).toBe(3);
  });
});
