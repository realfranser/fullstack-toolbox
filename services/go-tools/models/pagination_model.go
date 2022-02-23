package models

const DEFAULT_OFFSET = 0
const DEFAULT_PAGE_SIZE = 10
const DEFAULT_PAGE_INDEX = 1

type Pagination struct {
	PageSize	int	`json:"page_size" validate:"required"`
	PageIndex	int	`json:"page_index" validate:"required"`
	Offset		int	`json:"offset"`
}

type PaginationResponse struct {
	PageCount uint `json:"page_count"`
}
