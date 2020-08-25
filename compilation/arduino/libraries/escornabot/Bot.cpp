// Bot.cpp
/*

Copyright (C) 2014-2017 Escornabot - http://escornabot.com

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301,
USA.

See LICENSE.txt for details

*/

#include "Bot.h"
#include "Escornabot2.h"

//////////////////////////////////////////////////////////////////////

void Bot::init()
{
    // init engine
    ENGINE->init();

    // init button set
    #if USE_BUTTONS
    BUTTONS->init();
    #endif

    // init bluetooth
    #if USE_BLUETOOTH
    BLUETOOTH->init();
    #endif

    // init buzzer
    #if USE_BUZZER
    BUZZER.init();
    BUZZER.beep();
    #endif

    #if USE_SIMPLE_LED
    SIMPLE_LED.init();
    #endif

    #if USE_KEYPAD_LEDS
    KEYPAD_LEDS.init();
    #endif

    // restore last program
    #if USE_PERSISTENT_MEMORY
    PROGRAM->load();
    #endif

    EVENTS->add(this);
}

//////////////////////////////////////////////////////////////////////

void Bot::loop()
{
    EVENTS->indicateTick(micros());

    if (!ENGINE->isExecuting()) delay(10);
}

//////////////////////////////////////////////////////////////////////

void Bot::buttonPressed(BUTTON button)
{
    #if USE_SIMPLE_LED
    SIMPLE_LED.setStatus(true);
    #endif
}

//////////////////////////////////////////////////////////////////////

void Bot::buttonReleased(BUTTON button)
{
    #if USE_SIMPLE_LED
    SIMPLE_LED.setStatus(false);
    #endif

    if (ENGINE->isExecuting())
    {
        ENGINE->cancelExecution();
        return;
    }

    switch (button)
    {
        case BUTTON_UP:
            _storeMove(MOVE_FORWARD);
            break;

        case BUTTON_RIGHT:
            _storeMove(MOVE_RIGHT);
            break;

        case BUTTON_DOWN:
            _storeMove(MOVE_BACKWARD);
            break;

        case BUTTON_LEFT:
            _storeMove(MOVE_LEFT);
            break;

        case BUTTON_GO:
            _go();
            break;

        case BUTTON_RESET:
            PROGRAM->clear();
            break;
    }
}

//////////////////////////////////////////////////////////////////////

void Bot::buttonLongReleased(BUTTON button)
{
    #if USE_SIMPLE_LED
    SIMPLE_LED.setStatus(false);
    #endif

    if (ENGINE->isExecuting())
    {
        ENGINE->cancelExecution();
        return;
    }

    switch (button)
    {
        case BUTTON_DOWN:
            _storeMove(MOVE_PAUSE);
            break;
    }
}

//////////////////////////////////////////////////////////////////////

void Bot::programFinished()
{
    #if PROGRAM_RESET_ALWAYS
    PROGRAM->clear();
    #endif

    #if USE_BUZZER
    BUZZER.playRttl(PROGRAM_FINISHED_RTTL);
    #endif
}

//////////////////////////////////////////////////////////////////////

void Bot::programAborted(uint8_t executed, uint8_t total)
{
    #if PROGRAM_RESET_ALWAYS
    PROGRAM->clear();
    #endif
}

//////////////////////////////////////////////////////////////////////

void Bot::_go()
{
    // preloaded program
    if (PROGRAM->getMoveCount() == 0 && _total_programs == 0)
    {
        PROGRAM->addProgram(PROGRAM_ESCORNA_GREETING);
    }

    // only with movements
    if (PROGRAM->getMoveCount() > 0)
    {
        #if USE_PERSISTENT_MEMORY
        // save the movement program in EEPROM
        PROGRAM->save();
        #endif

        // let user to release the 'go' button before the action
        delay(DELAY_BEFORE_GO);

        ENGINE->execute(PROGRAM, AFTER_MOVEMENT_PAUSE, POV_ESCORNABOT);
        _total_programs++;
    }
}

//////////////////////////////////////////////////////////////////////

void Bot::_storeMove(MOVE move)
{
    if (PROGRAM->getMoveCount() < MOVE_LIMIT)
    {
        PROGRAM->addMove(move);
    }
    else
    {
        // memory is full
        _go();
    }
}

//////////////////////////////////////////////////////////////////////

// EOF
