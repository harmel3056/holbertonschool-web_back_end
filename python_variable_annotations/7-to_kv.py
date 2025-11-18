#!/usr/bin/env python3
"""
Demonstrates type-annotation on a basic function
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple where the first element is a string `k`
    and the second is the square of `v`
    """
    return (k, float(v ** 2))
