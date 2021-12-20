package helpers

import (
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/interfaces"
)

const defaultPageSize = 10
const defaultPageIndex = 1

func Paginate(paginationParams *interfaces.Pagination) (offset int, pageSize int){
	/* Check for null or invalid page size values */
	if paginationParams.PageSize <= 0 {
		paginationParams.PageSize = defaultPageSize
	}
	/* Check for null or invalid page index values */
	if paginationParams.PageIndex < 1 {
		paginationParams.PageIndex = defaultPageIndex
	}
	/* If the offset is not specified, it will be determined by the page size and the page index */
	offsetResult := (paginationParams.PageIndex -1) * paginationParams.PageSize
	if paginationParams.Offset > 0 {
		offsetResult = paginationParams.Offset
	}

	return offsetResult, paginationParams.PageSize
}
