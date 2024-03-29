# Calculation of the Cochran's criterion

## Overview

The Cochran's criterion is used to assess the homogeneity of variances only with an equal number of repetitions of each experiment, which is the case in statistical design and conduct of experiments. To apply the Cochran's criterion, the dispersion of the experimental values of the response function is calculated in each row of the experiment planning matrix.

## Usage

### Input data

The input data is a multidimensional array of results from several series of tests. Therefore, the test results must be presented in the form of a nested array, where the first element of the array will be the array of results of the first series of tests, the second element of the array will be the array of results of the second series of tests, etc.
For example, the following table with test results is given
| Series | Result1 |Result2 |Result3 |Result4 |Result5 |
|:------ |:-----:|:-----:|:-----:|:-----:|:-----:|
| 1 | 7 | 9 |6 |8 |4 |
| 2 | 9 | 7 |8 |6 |5 |
| 3 | 8 | 8 |7 |9 |8 |

convert to a nested data array
arrayData = [
[7, 9, 6, 8, 4],
[9, 7, 8, 6, 5],
[8, 8, 7, 9, 8]
];
This array can be used in a function to determine the Cochran's criterion

### Method

const testCochran = require("cochrans");

const criterionCochran's = testCochran.criterionCochtan(arrayData);

when arrayData - nested array (see Input data)

## Install

npm install cochrans

## Keywords

Cochran, criterion Cochran's
