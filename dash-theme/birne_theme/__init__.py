"""
Birne Design System - Python Theme Package
For use with Dash and Bootstrap applications
"""

from .colors import *
from .components import *

__version__ = "1.0.0"
__all__ = [
    # Colors
    "BIRNE_BLACK",
    "BIRNE_PURPLE",
    "BIRNE_DARK_PURPLE",
    "BIRNE_LEMON",
    "BIRNE_SAND",
    "BIRNE_GRAPEFRUIT",
    "TEXT_HEADING",
    "TEXT_BODY",
    "TEXT_CAPTION",
    "colors",
    # Typography
    "FONT_DISPLAY",
    "FONT_TEXT",
    "FONT_MONO",
    "typography",
    # Components
    "BirneButton",
    "BirneCard",
    "BirneBadge",
    "get_external_stylesheets",
]
