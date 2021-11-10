#!/bin/bash

# output colors
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

compile() {
  cd cmd/main
  go build main.go
  echo "${green}product-service compiled successfuly${reset}"
  exit 0
}

run() {
  cd cmd/main
  ./main
  exit 0
}

# Compile and run product-service
compile_run() {
  cd cmd/main
  go build main.go
  echo "${green}product-service compiled successfuly${reset}"
  ./main
  exit 0
}

# Uses nodemon to recompile each time a go file is saved
dev() {
  cd cmd/main
  nodemon --exec go run main.go --signal SIGTERM
}

do_command() {
    case "$1" in
      "compile") compile ;;
      "run") run ;;
      "compile & run") compile_run ;;
      "dev") dev ;;
     *) echo "unknown option";;
    esac
}

if [ $# -ne 0 ]; then
  echo "${red}No arguments are required when calling service.sh"
  exit 1
fi

select menu in compile run "compile & run" dev
do
  do_command "$menu"
done

