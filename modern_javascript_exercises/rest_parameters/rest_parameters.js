// Instructions can be found in rest_parameters.md

export function add(a, ...theRest) {  
  return a + theRest.reduce((sum, number)=> sum + number, 0 );
}

add(1, 2, 3, 4, 5);

