#!/usr/bin/env python3
"""
Demonstrates type-annotation on a basic function
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns the sum of mixed values in the mixed input list."""
    return sum(mxd_lst)
