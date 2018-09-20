// Typescript Study by Pocachip 2018.09.17
//https://www.typescriptlang.org/docs/handbook/basic-types.html

///////////
// Enums //
///////////

//Numeric enums
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
// if not initalize Up begins 0

// Numeric enums can be mixed in computed and constant members
function getSomeValue():number{ return 0;};
enum E {
    A = getSomeValue(),
    B,  // error 'A' is not constant-initialized, so 'B' needs an initializer
}

// String enums
enum Direction {
    Up1 = "UP",
    Down1 = "DOWN",
}