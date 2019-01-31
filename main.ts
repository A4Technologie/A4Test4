
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
// Motor Blocks

    // slow PWM frequency for slower speeds to improve torque
    function setPWM(): void
    {
    }


    
    
    /**
 * Functions to operate Grove module.
 */
//% weight=20 color=#00478F icon="A4LogoMin.jpg" block="A4Test2"
namespace A4Test2 {
    //% blockId="bitbot_motor_forwardV2" block="$move à la vitesse en pourcentage "
    //% weight=100
     //% subcategory=Moteurs
    export function changementVitesse(move: RobotMoves) : void
    {

            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 1023);  
    }
 
     /**
      * Drive robot forward (or backward) at speed for milliseconds.
      */
    //% blockId="bitbot_motor_forward_milliseconds" block="$move à la vitesse $speed\\% pendant %milliseconds|(ms)"
    //% speed.shadow="speedPicker"
    //% weight=95
    //% subcategory=Moteurs
    export function driveMilliseconds(move:RobotMoves, speed: number, milliseconds: number): void
    {
        drive(move,speed);
        basic.pause(milliseconds);
        drive(move,0);
    }
 
 
}

