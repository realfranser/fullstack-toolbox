#!/bin/bash

# output colors
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

# Compile and run product-service
compile_run() {
  cd cmd/main
  echo "Compiling product-service ..."
  go build main.go
  echo "${green}Executing product-service ..."
  ./main
  exit 0
}

do_command() {
    case "$1" in
      "run") compile_run ;;
     *) echo "unknown option";;
    esac
}

if [ $# -ne 0 ]; then
  echo "${red}Select a function to operate"
  exit 1
fi

select menu in run
do
  do_command "$menu"
done

