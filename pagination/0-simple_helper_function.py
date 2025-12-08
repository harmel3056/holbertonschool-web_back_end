#!/usr/bin/python3

def index_range(page, page_size):
    low_index = page_size * (page - 1)
    high_index = page * page_size
    return (low_index, high_index)
