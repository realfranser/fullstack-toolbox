package models

const DEFAULT_PAGE_SIZE = 10
const DEFAULT_PAGE_INDEX = 1

type PaginationRequest struct {
	PageIndex uint	`json:"page_index" validate:"required"`
	PageSize 	uint	`json:"page_size" validate:"required"`
	Offset		uint	`json:"offset"`
}

type PaginationResponse struct {
	PageCount	uint	`json:"page_count"`
}
