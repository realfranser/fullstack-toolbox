package tests

import (
  "io"
  "encoding/json"
  "bytes"
)

func CreateBody(rawBody interface{}) (body io.Reader, err error){
  jsonData, err := json.Marshal(rawBody)
  if err != nil {
    return nil, err
  }

  return bytes.NewBuffer(jsonData), nil
}

