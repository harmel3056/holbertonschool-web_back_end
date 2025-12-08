#!/usr/bin/env python3
"""
Helper function for pagination
"""


def index_range(page, page_size):
    """
    Calculate the start and end indexes for a given page of data.

    Args:
        page (int): The current page number (1-indexed).
        page_size (int): The number of items per page.

    Returns:
        tuple: A pair (start_index, end_index) representing the slice of items
               to fetch from a dataset.
    """
    low_index = page_size * (page - 1)
    high_index = page * page_size
    return (low_index, high_index)
