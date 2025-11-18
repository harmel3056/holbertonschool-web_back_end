#!/usr/bin/env python3
"""
Demonstrates type-annotation on a basic function
"""
import typing


def sum_list(input_list: typing.List[float]) -> float:
    """Returns the sum of all float values in the input list."""
    return sum(input_list)
