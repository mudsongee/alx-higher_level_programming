#!/usr/bin/python3
def list_division(my_list_1, my_list_2, list_length):
    ***Divides two list elements by element.***
    newList = []
    for x in range(list_length):
        result = 0
        try:
            result = my_list_1[x] / my_list_2[x]
        except (ValueError, TypeError):
            print("{}".format("wrong type"))
        except ZeroDivisionError:
            print("{}".format("division by 0"))
        except IndexError:
            print("{}".format("out of range"))
        finally:
            newList.append(result)
    return(newList)
