#!/bin/bash

# output colors
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

# Compile and run product-service
compile_run() {
  cd cmd/main
  go build main.go
  echo "${green}product-service compiled successfuly${reset}"
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
  echo "${red}No arguments are required when calling service.sh"
  exit 1
fi

select menu in run
do
  do_command "$menu"
done
