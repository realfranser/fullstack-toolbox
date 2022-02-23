package helpers

import (
	"bytes"
	"encoding/json"
	"io"
)

func CreateBody(rawBody interface{}) (body io.Reader, err error){
  jsonData, err := json.Marshal(rawBody)
  if err != nil {
    return nil, err
  }

  return bytes.NewBuffer(jsonData), nil
}
