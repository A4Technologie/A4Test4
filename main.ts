
/**
  * Enumeration of movements.
  */
enum RobotMoves
{
    //% block="Avancer"
    Forward,
    //% block="Reculer"
    Backward,
     //% block="Pivoter vers la droite"
    RotateLeft,
     //% block="Pivoter vers la gauche"
    RotateRight,
     //% block="Tourner à droite"
    TurnRight,
     //% block="Tourner à gauche"
    TurnLeft
 
}


/**
 * Functions to operate Grove motors.
 */
//% weight=10 color=#00478F icon="\uf108" block="A4Test"
namespace A4Test1 {
    //% blockId="bitbot_motor_forward" block="Avancer à la vitesse speed %speed"
    //% speed.shadow="speedPicker"
    //% weight=100
    //% subcategory=Motors
    export function drive(speed: number): void
    {
        
    }
}
    
    
    /**
 * Functions to operate Grove module.
 */
//% weight=20 color=#00478F icon="\uf108" block="A4Test2"
namespace A4Test2 {
    //% blockId="bitbot_motor_forwardV2" block="$move à la vitesse en pourcentage $speed\\%"
    //% speed.shadow="speedPicker"
    //% weight=100
     //% subcategory=Moteurs
    export function changementVitesse(move: RobotMoves, speed: number) : void
    {
    }
}

