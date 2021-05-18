
def validate_pin(pin):
  return len(pin) in (4,6) and pin.isdigit()

print(validate_pin(4565))
print(len(pin))
