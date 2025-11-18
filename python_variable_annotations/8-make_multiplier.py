#!/usr/bin/env python3
"""
Demonstrates type-annotation on a basic function
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies its input by the given multiplier
    """
    def multiply(f: float) -> float:
        return f * multiplier

    return multiply
