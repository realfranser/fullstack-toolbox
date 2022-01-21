package helpers

import (
	"github.com/realfranser/fullstack-toolbox/back/go-tools/models"
)

func Paginate(paginationParams *models.Pagination) (offset int, pageSize int){
	/* Check for null or invalid page size values */
	if paginationParams.PageSize <= 0 {
		paginationParams.PageSize = models.DEFAULT_PAGE_SIZE
	}
	/* Check for null or invalid page index values */
	if paginationParams.PageIndex < 1 {
		paginationParams.PageIndex = models.DEFAULT_PAGE_INDEX
	}
	/* If the offset is not specified, it will be determined by the page size and the page index */
	offsetResult := (paginationParams.PageIndex -1) * paginationParams.PageSize
	if paginationParams.Offset > 0 {
		offsetResult = paginationParams.Offset
	}

	return offsetResult, paginationParams.PageSize
}
