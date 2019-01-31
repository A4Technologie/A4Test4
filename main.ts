
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
        let forward = (speed >= 0);
        let absSpeed = Math.abs(speed);
             if (speed > 100)
            speed = 100;
        else if (speed < -100)
            speed = -100;
         setPWM();
       let speedPositive = speed*10*forward;
       let speedNegative = speed*10*(!forward);
     

        if ((move == RobotMoves.Forward) || (move == RobotMoves.RotateLeft) || (move == RobotMoves.TurnLeft))
            pins.analogWritePin(AnalogPin.P13, speedPositive);
            pins.analogWritePin(AnalogPin.P14, speedNegative);  
         if ((move == RobotMoves.Backward) || (move == RobotMoves.RotateRight))
            pins.analogWritePin(AnalogPin.P13, speedNegative);
            pins.analogWritePin(AnalogPin.P14, speedPositive);  

         if ((move == RobotMoves.Forward) || (move == RobotMoves.RotateRight) || (move == RobotMoves.TurnRight))
            pins.analogWritePin(AnalogPin.P15, speedPositive);
            pins.analogWritePin(AnalogPin.P16, speedNegative);  
         if ((move == RobotMoves.Backward) || (move == RobotMoves.RotateLeft))
            pins.analogWritePin(AnalogPin.P15, speedNegative);
            pins.analogWritePin(AnalogPin.P16, speedPositive);  
    }
}

