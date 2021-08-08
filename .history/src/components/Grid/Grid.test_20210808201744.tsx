import '@testing-library/jest-dom';

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Coords, Field } from '@/helpers/Field';

import { Cell } from './Cell';
import { Grid } from '@/components/Grid/Grid';
