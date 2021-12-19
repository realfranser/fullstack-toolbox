package helpers

import (
	"net/http"
	"strconv"

	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/interfaces"
)

func Paginate(r *http.Request) (offset int, pageSize int){
	var paginationParams = &interfaces.Pagination{}
	var pageIndex int
	ParseBody(r, paginationParams)
	if paginationParams.PageSize == nil || paginationParams.PageSize < 1{
		pageSize = 10
	}
	if paginationParams.PageIndex < 1 {
		pageIndex = 1
	}
	offsetResult := (pageIndex -1) * pageSize
	specificOffset, err := strconv.ParseInt(queryOffset, 0, 0)
	if err == nil && specificOffset > 0 {
		offsetResult = specificOffset
	}

	return int(offsetResult), int(pageSizeResult)
}