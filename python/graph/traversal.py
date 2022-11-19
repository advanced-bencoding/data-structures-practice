graph1 = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 1, 0],
    [0, 1, 0, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 1, 1, 0]
]

graph = [
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0]
]

open = [0]
close = {-1}

print("DFS")
while len(open)>0:
    cursor = open.pop()
    close.add(cursor)
    print(cursor, end=" -> ")
    for i in range(len(graph[cursor])):
        if graph[cursor][i]!=0 and i not in close and i not in open:
            open.append(i)
print("N")

open = [0]
close = {-1}

print("BFS")
while len(open)>0:
    cursor = open.pop(0)
    close.add(cursor)
    print(cursor, end=" -> ")
    for i in range(len(graph[cursor])):
        if graph[cursor][i]!=0 and i not in close and i not in open:
            open.append(i)
print("N")