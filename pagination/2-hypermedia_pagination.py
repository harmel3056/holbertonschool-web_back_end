#!/usr/bin/env python3
"""
Facilitates multiple helper functions to extract items based
on page number and objects per page. Includes hypermedia
pagination.
"""

import csv
import math
from typing import List


def index_range(page, page_size):
    """
    Calculates the start and end indexes for a given page of data.
    """
    start = page_size * (page - 1)
    end = page * page_size
    return (start, end)


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Extracts index items based on page number and number of items per page
        """
        assert (
            isinstance(page, int)
            and page > 0
        ), "page should be greater than 0"
        assert (
            isinstance(page_size, int)
            and page_size > 0
        ), "page_size should be greater than 0"

        start, end = index_range(page, page_size)
        paginated = self.dataset()[start:end]
        return paginated

    def get_hyper(self, page: int = 1, page_size: int = 10):
        """
        Generates the hypermedia links to nagivate between pages
        """
        paginated_items = self.get_page(page, page_size)
        total_items = len(self.dataset())
        total_pages = math.ceil(total_items / page_size)
        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            'page_size': page_size,
            'page': page,
            'data': paginated_items,
            'next_page': next_page,
            'prev_page': prev_page,
            'total_pages': total_pages
        }
