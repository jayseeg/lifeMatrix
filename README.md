# lifeMatrix
A matrix analyzer that transforms one matrix to another based on rules

## Setup
```npm i```

## Usage
Supply a seed generation in a json string optionally followed by a number of desired generations to run through.

The program will output an array of all living generations and false once it hits dead generation.
```
npm start '[[0,1,0,0,0],[1,0,0,1,1],[1,1,0,0,1],[0,1,0,0,0],[1,0,0,0,1]]'
```
Will output:
```
[ [ [ 0, 1, 0, 0, 0 ],
    [ 1, 0, 0, 1, 1 ],
    [ 1, 1, 0, 0, 1 ],
    [ 0, 1, 0, 0, 0 ],
    [ 1, 0, 0, 0, 1 ] ],
  [ [ 0, 0, 0, 0, 0 ],
    [ 1, 0, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1 ],
    [ 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ] ] ]
```

```
npm start '[[0,1,0,0,0],[1,0,0,1,1],[1,1,0,0,1],[0,1,0,0,0],[1,0,0,0,1]]' 3000
```
Will output:
```
[ [ [ 0, 1, 0, 0, 0 ],
    [ 1, 0, 0, 1, 1 ],
    [ 1, 1, 0, 0, 1 ],
    [ 0, 1, 0, 0, 0 ],
    [ 1, 0, 0, 0, 1 ] ],
  [ [ 0, 0, 0, 0, 0 ],
    [ 1, 0, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1 ],
    [ 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ] ],
  [ [ 0, 0, 0, 1, 0 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 0 ],
    [ 0, 0, 0, 0, 0 ] ],
  [ [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 1, 1 ],
    [ 1, 0, 0, 1, 1 ],
    [ 1, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ] ],
  [ [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 1, 1 ],
    [ 1, 1, 1, 1, 1 ],
    [ 1, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ] ],
  [ [ 0, 0, 0, 0, 0 ],
    [ 0, 1, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 0 ] ],
  [ [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ] ],
  false ]
```

(requires node ^0.12.0 for es2015 features)

## Test
```npm test```
