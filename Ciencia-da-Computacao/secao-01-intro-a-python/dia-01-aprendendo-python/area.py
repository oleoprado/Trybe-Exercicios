PI = 3.14


def square(side):
    """Calcutate area of square"""
    return side * side


def rectangle(length, width):
    """Calculate area of rectangle"""
    return length * width


def circle(radius):
    """Calculate area of circle"""
    return round(PI * radius * radius, 2)


if __name__ == '__main__':
    print("Área do quadrado:", square(10))
    print("Área do retangulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))
