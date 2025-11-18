#!/usr/bin/env python3
"""
Demonstrates type-annotation on a basic function
"""


def sum_list(input_list: list[float]) -> float:
    """Returns the sum of all float values in the input list."""
    return sum(input_list)
