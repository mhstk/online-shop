from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ("username", "password", "name", "address")
        extra_kwargs = {"password": {"write_only": True, "min_length": 5, "style": {"input_type": "password"}}}

    def create(self, validated_data):
        return get_user_model().objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        password = validated_data.pop("password")
        user = super().update(instance, validated_data)
        if password:
            user.set_password(password)
            user.save()

        return user


class TokenSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': "password"}, trim_whitespace=False)

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        user = authenticate(self.context.get('request'), username=username, password=password)

        if not user:
            raise serializers.ValidationError("wrong username or password")
        attrs['user'] = user
        return attrs
