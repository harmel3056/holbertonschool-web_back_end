#!/usr/bin/env python3
import csv
import math
from typing import List
"""
Facilitates multiple helper functions to extract items based on page number and objects per page
"""


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
        items_returned = self.dataset()[start:end]
        return items_returned
