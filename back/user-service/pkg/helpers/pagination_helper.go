package helpers

import (
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

func Paginate(r *http.Request) (offset int, pageSize int){
	vars := mux.Vars(r)
	queryPageSize := vars["pageSize"]
	queryPage := vars["page"]
	queryOffset := vars["offset"]
	pageSizeResult, err := strconv.ParseInt(queryPageSize, 0, 0)
	if err != nil || pageSize < 1{
		pageSize = 10
	}
	page, err := strconv.ParseInt(queryPage, 0, 0)
	if err != nil || page < 1 {
		page = 1
	}
	offsetResult := (page -1) * pageSizeResult
	specificOffset, err := strconv.ParseInt(queryOffset, 0, 0)
	if err == nil && specificOffset > 0 {
		offsetResult = specificOffset
	}

	return int(offsetResult), int(pageSizeResult)
}