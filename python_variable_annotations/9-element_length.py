#!/usr/bin/env python3
"""
Demonstrates type-annotation on a basic function
"""
from typing import List, Iterable, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns iterable object"""
    return [(i, len(i)) for i in lst]
