package models

const DefaultPageSize = 10
const DefaultPageIndex = 1

type Pagination struct {
	PageSize	int	`json:"page_size"`
	PageIndex	int	`json:"page_index"`
	Offset		int	`json:"offset"`
}
