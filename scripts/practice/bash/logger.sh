#!/bin/bash

logger hello
logger -p mail.info -t mailtag mailmessage
logger -i -p user.err error!
logger -s This is displayed on screen. -t screen -i