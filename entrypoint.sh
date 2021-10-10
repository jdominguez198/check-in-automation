#!/bin/sh -l

cd /app/
cypress run --browser chrome $@
